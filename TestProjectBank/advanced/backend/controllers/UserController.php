<?php

namespace backend\controllers;

use backend\models\CreateUserForm;
use Codeception\Exception\Fail;
use Yii;
use common\models\User;
use backend\models\SearchUser;
use yii\web\Controller;
use yii\web\ForbiddenHttpException;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * UserController implements the CRUD actions for User model.
 */
class UserController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    public function beforeAction($action)
    {
        if (!Yii::$app->user->can('viewAdminPage')) {
            throw new ForbiddenHttpException('Access denied');
        }
        return parent::beforeAction($action);

    }


    /**
     * Lists all User models.
     * @return mixed
     */
    public function actionIndex()
    {
        if (!Yii::$app->user->can('viewAdminPage')) {
            throw new NotFoundHttpException('The requested page does not exist.');
        }

        $searchModel = new SearchUser();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single User model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        $model = $this->findModel($id);
        $role = Yii::$app->authManager->getRolesByUser($id);

        return $this->render('view', [
            'model' => $model,
            'role' => current($role),
        ]);
    }

    /**
     * Creates a new User model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new CreateUserForm();
        if ($model->load(Yii::$app->request->post())) {
            if ($user = $model->Create()) {
                    $model = $this->findModel($user->id);
                    $role = Yii::$app->authManager->getRolesByUser($user->id);

                    return $this->render('view', [
                        'model' => $model,
                        'role' => current($role)
                    ]);
            }
        }

        $roles = Yii::$app->authManager->getRoles();

        return $this->render('create', [
            'model' => $model,
            'roles' => $roles
        ]);
    }

    /**
     * Updates an existing User model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $roles = Yii::$app->authManager->getRoles();

        if (Yii::$app->request->isPost) {
            if ($model->load(Yii::$app->request->post()) && $model->save()) {
                return $this->redirect(['view', 'id' => $model->id]);
            }
            $selectedRole = Yii::$app->request->post('selectedRole');
            $role = Yii::$app->authManager->getRole($selectedRole);
            Yii::$app->authManager->revokeAll($id);
            Yii::$app->authManager->assign($role, $id);

            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'roles' => $roles,
                'model' => $model
            ]);
        }
    }

    /**
     * Deletes an existing User model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the User model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return User the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = User::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
