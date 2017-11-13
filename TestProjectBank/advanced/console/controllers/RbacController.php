<?php
/**
 * Created by PhpStorm.
 * User: YaroshIS
 * Date: 10.11.2017
 * Time: 22:31
 */

namespace console\controllers;

use Yii;
use yii\web\Controller;

class RbacController extends Controller
{

    public function actionInit()
    {
        $auth = Yii::$app->authManager;

        $auth->removeAll();

        $admin = $auth->createRole('admin');
        $trustedUser = $auth->createRole('trustedUser');
        $unequalUserTable = $auth->createRole('unequalUserTable'); // only Table component
        $unequalUserChart = $auth->createRole('unequalUserChart'); // only Chart component
        $unequalUserTable->description = 'The user can view only table component';
        $unequalUserChart->description = 'The user can view only chart component';

        $auth->add($admin);
        $auth->add($trustedUser);
        $auth->add($unequalUserTable);
        $auth->add($unequalUserChart);

        $viewAdminPage = $auth->createPermission('viewAdminPage');
        $viewAdminPage->description = 'Просмотр админки';

        $viewTable = $auth->createPermission('viewTable');
        $viewTable->description = 'View table component in Angular2 app';

        $viewChart = $auth->createPermission('viewChart');
        $viewChart->description = 'View chart component in Angular 2 app';

        $auth->add($viewAdminPage);
        $auth->add($viewChart);
        $auth->add($viewTable);

        $auth->addChild($unequalUserTable, $viewTable);

        $auth->addChild($unequalUserChart, $viewChart);

        $auth->addChild($trustedUser, $unequalUserTable);
        $auth->addChild($trustedUser, $unequalUserChart);

        $auth->addChild($admin, $trustedUser);
        $auth->addChild($admin, $unequalUserTable);
        $auth->addChild($admin, $unequalUserChart);
        $auth->addChild($admin, $viewAdminPage);

        $auth->assign($admin, 3);
        $auth->assign($trustedUser, 4);
        $auth->assign($unequalUserTable, 5);
        $auth->assign($unequalUserChart, 6);
    }

}