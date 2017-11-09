<?php
/**
 * Created by PhpStorm.
 * User: YaroshIS
 * Date: 31.10.2017
 * Time: 17:19
 */

namespace frontend\controllers;

use yii\web\Controller;
use Yii;
use yii\helpers\Json;
use yii\web\Response;

class ApiController extends Controller
{
    // GET зарпос на получение списка доступных валют
    public function actionGetCurrencies()
    {
        $request = Yii::$app->request;
        $response = Yii::$app->response;

        $response->headers->add('Access-Control-Allow-Origin', '*');

        if (!$request->isGet) {
            $response->statusCode = 400;
            $response->send();
            return false;
        }

        $curl_handler = curl_init();
        curl_setopt($curl_handler, CURLOPT_URL, 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0');
        curl_setopt($curl_handler, CURLOPT_RETURNTRANSFER, 1);

        $query = curl_exec($curl_handler);

        $_response = [];
        if (curl_getinfo($curl_handler)['http_code'] !== 200) {
            $response->statusCode = curl_getinfo($curl_handler)['http_code'];
        } else {
            $_response = Json::decode($query);
        }

        curl_close($curl_handler);

        $response->format = Response::FORMAT_JSON;

        return $_response;
    }

    // POST запрос на получение курсов запрошенных валют на запрошенный период времени.
    // Для этого метода отключен CSRF токен
    public function actionGetCurrenciesRateOnRange()
    {

        $request = Yii::$app->request;
        $response = Yii::$app->response;

        if(!$request->isPost){
            $response->statusCode = 400;
            $response->send();
            return false;
        }

        $response->headers->add('Access-Control-Allow-Origin', "*");
        $response->headers->add('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, Authorization');
        $response->headers->add('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');


        $dateFrom = new \DateTime(Json::decode($request->post('dateFrom')));
        $dateTo = new \DateTime(Json::decode($request->post('dateTo')));
        $cursID = Json::decode($request->post('cursID'));

        $curl_handler = curl_init();

        curl_setopt($curl_handler, CURLOPT_URL, 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0');
        curl_setopt($curl_handler, CURLOPT_CONNECTTIMEOUT, 2);
        curl_setopt($curl_handler, CURLOPT_RETURNTRANSFER, 1);

        $_response = [];
        foreach($cursID as $curID){
            $url = 'http://www.nbrb.by/API/ExRates/Rates/Dynamics/' . $curID . '?startDate='
                . $dateFrom->format("Y")
                . '-'
                . $dateFrom->format("m")
                . '-'
                . $dateFrom->format("d")
                . '&endDate='
                . $dateTo->format("Y")
                . '-'
                . $dateTo->format("m")
                . '-'
                . $dateTo->format("d");
            curl_setopt($curl_handler, CURLOPT_URL, $url);
            $_response[] = Json::decode(curl_exec($curl_handler));
        }

        curl_close($curl_handler);

        $response->format = Response::FORMAT_JSON;

        return $_response;
    }

    // POST запрос на получение курсов запрошенных валют на определенный период времени с возвратом только запрошенного количества значений.
    // Для этого метода отключен CSRF токен.
    public function actionGetCurrenciesRateOnDates()
    {
        $request = Yii::$app->request;
        $response = Yii::$app->response;

        if(!$request->isPost){
            $response->statusCode = 400;
            $response->send();
            return false;
        }

        $response->headers->add('Access-Control-Allow-Origin', "*");
        $response->headers->add('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, Authorization');
        $response->headers->add('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');

        $cursID = Json::decode($request->post('cursID'));
        $dateFrom = new \DateTime(Json::decode($request->post('dateFrom')));
        $dateTo = new \DateTime(Json::decode($request->post('dateTo')));

        $curl_handler = curl_init();
        curl_setopt($curl_handler, CURLOPT_CONNECTTIMEOUT, 2);
        curl_setopt($curl_handler, CURLOPT_RETURNTRANSFER, 1);

        $_response = [];
        foreach ($cursID as $curID) {
            $url = 'http://www.nbrb.by/API/ExRates/Rates/Dynamics/' . $curID . '?startDate='
                . $dateFrom->format("Y")
                . '-'
                . $dateFrom->format("m")
                . '-'
                . $dateFrom->format("d")
                . '&endDate='
                . $dateTo->format("Y")
                . '-'
                . $dateTo->format("m")
                . '-'
                . $dateTo->format("d");

            curl_setopt($curl_handler, CURLOPT_URL, $url);
            $currencyRates = curl_exec($curl_handler);
            $_response[] = Json::decode($currencyRates);
        }

        curl_close($curl_handler);

        $response->format = Response::FORMAT_JSON;

        return $_response;
    }

    private function log_msg($msg)
    {
        $logFile = fopen('log.txt', 'a+');
        fwrite($logFile, $msg . "\n");
        fclose($logFile);
    }

    // Отключаем CSRF токены для POST экшенов
    public function beforeAction($action)
    {
        if ($action->id == "get-currencies-rate-on-range" || $action->id == "get-currencies-rate-on-dates")
            $this->enableCsrfValidation = false;

        return parent:: beforeAction($action);
    }

}