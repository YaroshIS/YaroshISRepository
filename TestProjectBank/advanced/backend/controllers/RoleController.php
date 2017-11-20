<?php
/**
 * Created by PhpStorm.
 * User: YaroshIS
 * Date: 16.11.2017
 * Time: 15:19
 */

namespace backend\controllers;

use backend\models\CreateRoleForm;
use backend\models\RBACManager;
use Yii;
use yii\web\Controller;
use yii\web\ForbiddenHttpException;

class RoleController extends Controller
{
    // ���� ����� ����������� ����� ������ action. ����� ����������� ������� � ������������ ���������� viewAdminPage
    // � ������, ���� ���������� ��� - ����������� ���������� ForbiddenHttpException � ���������� 'Access denied'.
    public function beforeAction($action)
    {
        if (!Yii::$app->user->can('viewAdminPage')) {
            throw new ForbiddenHttpException('Access denied');
        }
        return parent::beforeAction($action);
    }

    // ��������, ������� ���������� ������������� index.php � ������������� ������ ��������� ����� � ����������
    public function actionIndex()
    {
        $roles = RBACManager::GetRoles();
        $permissions = RBACManager::GetPermissions();

        return $this->render('index', [
            'roles' => $roles,
            'permissions' => $permissions
        ]);
    }

    // ��������, ������� ���������� ������������ ����, ��� ������� ������ �� ������� $_GET
    public function actionViewRole()
    {
        $role = Yii::$app->request->get('role');
        $role = RBACManager::GetRole($role);

        return $this->render('role', [
            'role' => $role
        ]);
    }

    // ��������, ������� ���������� ������������ ����������, ��� �������� ������ �� ������� $_GET
    public function actionViewPermission()
    {
        $permission = Yii::$app->request->get('permission');
        $permission = RBACManager::GetPermission($permission);

        return $this->render('permission', [
            'permission' => $permission
        ]);
    }

    // ��������, ������� ���������� ����� CreateRoleForm.php � ��������� ������� ����� ����
    public function actionCreateRole()
    {
        $permissions = Yii::$app->authManager->getPermissions();
        $model = new CreateRoleForm();

        if ($model->load(Yii::$app->request->post())) {

            if(Yii::$app->request->post('permissions')){
                $model->permissions = Yii::$app->request->post('permissions');
            }else{
                Yii::$app->session->setFlash('error', 'Please, select permissions');
            }

            if ($model->Create()) {
                Yii::$app->session->setFlash('success', 'The role was successfully created');
                return $this->redirect('index');
            }
        }

        return $this->render('create-role', [
            'model' => $model,
            'permissions' => $permissions
        ]);
    }

    // ��������, ���������� �� �������� ����, ��� ������� ��������� � �������� ��������� $role
    // @role - ��� ����
    public function actionDeleteRole($role)
    {
        $role = Yii::$app->authManager->getRole($role);

        RBACManager::Remove($role);

        Yii::$app->session->setFlash('success', 'The role was succesfully deleted');
        $this->redirect('index');
    }
}