<?php
namespace frontend\controllers;

use Faker\Provider\cs_CZ\DateTime;
use Yii;
use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\LoginForm;
use frontend\models\PasswordResetRequestForm;
use frontend\models\ResetPasswordForm;
use frontend\models\SignupForm;
use frontend\models\ContactForm;

/**
 * Site controller
 */
class SiteController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'corsFilter' => [
            'class' => \yii\filters\Cors::className(),
            'cors' => [
                'Access-Control-Allow-Origin' => ['*'],
            ]
        ],
        'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout', 'signup'],
                'rules' => [
                    [
                        'actions' => ['signup'],
                        'allow' => true,
                        'roles' => ['?'],
                    ],
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    /**
     * Displays homepage.
     *
     * @return mixed
     */
    public function actionIndex()
    {
        return $this->render('index');
    }

    /**
     * Logs in a user.
     *
     * @return mixed
     */
    public function actionLogin()
    {
        if (!Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        } else {
            return $this->render('login', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Logs out the current user.
     *
     * @return mixed
     */
    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }

    /**
     * Displays contact page.
     *
     * @return mixed
     */
    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail(Yii::$app->params['adminEmail'])) {
                Yii::$app->session->setFlash('success', 'Thank you for contacting us. We will respond to you as soon as possible.');
            } else {
                Yii::$app->session->setFlash('error', 'There was an error sending your message.');
            }

            return $this->refresh();
        } else {
            return $this->render('contact', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Displays about page.
     *
     * @return mixed
     */
    public function actionAbout()
    {
        return $this->render('about');
    }

    /**
     * Signs user up.
     *
     * @return mixed
     */
    public function actionSignup()
    {
        $model = new SignupForm();
        if ($model->load(Yii::$app->request->post())) {
            if ($user = $model->signup()) {
                if (Yii::$app->getUser()->login($user)) {
                    return $this->goHome();
                }
            }
        }

        return $this->render('signup', [
            'model' => $model,
        ]);
    }

    /**
     * Requests password reset.
     *
     * @return mixed
     */
    public function actionRequestPasswordReset()
    {
        $model = new PasswordResetRequestForm();
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail()) {
                Yii::$app->session->setFlash('success', 'Check your email for further instructions.');

                return $this->goHome();
            } else {
                Yii::$app->session->setFlash('error', 'Sorry, we are unable to reset password for the provided email address.');
            }
        }

        return $this->render('requestPasswordResetToken', [
            'model' => $model,
        ]);
    }

    /**
     * Resets password.
     *
     * @param string $token
     * @return mixed
     * @throws BadRequestHttpException
     */
    public function actionResetPassword($token)
    {
        try {
            $model = new ResetPasswordForm($token);
        } catch (InvalidParamException $e) {
            throw new BadRequestHttpException($e->getMessage());
        }

        if ($model->load(Yii::$app->request->post()) && $model->validate() && $model->resetPassword()) {
            Yii::$app->session->setFlash('success', 'New password saved.');

            return $this->goHome();
        }

        return $this->render('resetPassword', [
            'model' => $model,
        ]);
    }

    public function actionGetCurrencies()
    {
        $request = Yii::$app->request;
        $response = Yii::$app->response;

        $response->headers->add('Access-Control-Allow-Origin', 'http://localhost:4200');

        if(!$request->isGet){
            $response->statusCode = 400;
            $response->send();
            exit;
        }

        $curl_handler = curl_init();
        curl_setopt($curl_handler, CURLOPT_URL, 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0');
        curl_setopt($curl_handler, CURLOPT_CONNECTTIMEOUT, 2);
        curl_setopt($curl_handler, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl_handler, CURLOPT_USERAGENT, 'Yii2 + Angular 2 Test Project');

        $query = curl_exec($curl_handler);

        if($query == false){
            $response->statusCode = 500;
        }else{
            $response->content = $query;
        }

        curl_close($curl_handler);

        return $response->send();
    }

    public function actionGetCurrenciesRateOnRange(){

        $request = Yii::$app->request;
        $response = Yii::$app->response;

        $response->headers->add('Access-Control-Allow-Origin', "*");
        $response->headers->add('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, Authorization');
        $response->headers->add('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');


        $dateFrom = new \DateTime(json_decode($request->post('dateFrom')));
        $dateTo = new \DateTime(json_decode($request->post('dateTo')));
        $cursID = json_decode($request->post('cursID'));

//        $query = "[";
//
//        for($i = 0; $i < count($cursID); $i++){
//            $query.= '[';
//            $query .= $this->GetCurrencyRateOnRange($cursID[$i], $dateFrom, $dateTo);
//            $query = rtrim($query,',');
//            $query .= '],';
//        }
//        $query = rtrim($query,',');
//        $query .= ']';

        $curl_handler = curl_init();

        curl_setopt($curl_handler, CURLOPT_URL, 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0');
        curl_setopt($curl_handler, CURLOPT_CONNECTTIMEOUT, 2);
        curl_setopt($curl_handler, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl_handler, CURLOPT_USERAGENT, 'Yii2 + Angular 2 Test Project');

        $query = "[";
        foreach($cursID as $curID){
            $url = 'http://www.nbrb.by/API/ExRates/Rates/Dynamics/'.$curID.'?startDate='
                .$dateFrom->format("Y")
                .'-'
                .$dateFrom->format("m")
                .'-'
                .$dateFrom->format("d")
                .'&endDate='
                .$dateTo->format("Y")
                .'-'
                .$dateTo->format("m")
                .'-'
                .$dateTo->format("d");
            curl_setopt($curl_handler, CURLOPT_URL, $url);
            $query .= curl_exec($curl_handler);
            $query .= ',';
        }
        $query = rtrim($query, ',');
        $query .= ']';

        $response->content = $query;

        $response->send();

        exit;
    }

    public function actionGetCurrenciesRateOnDates(){
        $request = Yii::$app->request;
        $response = Yii::$app->response;

        $response->headers->add('Access-Control-Allow-Origin', "*");
        $response->headers->add('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, Authorization');
        $response->headers->add('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');

        $cursID = json_decode($request->post('cursID'));
        $dateFrom = new \DateTime(json_decode($request->post('dateFrom')));
        $dateTo = new \DateTime(json_decode($request->post('dateTo')));
        $diff = $dateTo->diff($dateFrom)->days;
        $countOfDates = json_decode($request->post('countOfRates'));

        $this->log_msg('diff '.$diff);
        $this->log_msg('countOfDates: '.$countOfDates);

        $requiredPositions = $diff > $countOfDates ? $this->GetRequiredCountOfElementsOnRange($diff, $countOfDates) : $this->GetRequiredCountOfElementsOnRange($diff+1,$diff+1);

        $curl_handler = curl_init();
        curl_setopt($curl_handler, CURLOPT_CONNECTTIMEOUT, 2);
        curl_setopt($curl_handler, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl_handler, CURLOPT_USERAGENT, 'Yii2 + Angular 2 Test Project');

        $query = "[";
        foreach($cursID as $curID){
            $url = 'http://www.nbrb.by/API/ExRates/Rates/Dynamics/'.$curID.'?startDate='
                .$dateFrom->format("Y")
                .'-'
                .$dateFrom->format("m")
                .'-'
                .$dateFrom->format("d")
                .'&endDate='
                .$dateTo->format("Y")
                .'-'
                .$dateTo->format("m")
                .'-'
                .$dateTo->format("d");

            curl_setopt($curl_handler, CURLOPT_URL, $url);
            $currencyRates = curl_exec($curl_handler);
            $currencyRates = json_decode($currencyRates);

            $requiredRates = [];
            for($i = 0; $i < count($requiredPositions); $i++) {
                $requiredRates[] = $currencyRates[$requiredPositions[$i]];
            }
            $query .= json_encode($requiredRates).',';
        }
        $query = rtrim($query,',');
        $query .= ']';

        $response->content = $query;
        $response->send();
    }

    private function GetRequiredCountOfElementsOnRange($range,$countOfElements){
        $outArr = [];

        $increment = ($range+1)/$countOfElements;

        for($i = 0; $i < $range; $i += $increment){
            $outArr[] = floor($i);
        }

        return $outArr;
    }

    private function log_msg($msg){
        $logFile = fopen('log.txt', 'a+');
        fwrite($logFile, $msg."\n");
        fclose($logFile);
    }

    public function beforeAction($action)
    {
        if($action->id == "get-currencies-rate-on-range" || $action->id == "get-currencies-rate-on-dates")
            $this->enableCsrfValidation = false;

        return parent :: beforeAction($action);
    }

}
