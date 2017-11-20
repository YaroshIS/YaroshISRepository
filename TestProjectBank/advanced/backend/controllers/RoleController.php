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
    // Этот метод запускается перед каждым action. Здесь проверяется наличие у пользователя разрешения viewAdminPage
    // В случае, если разрешения нет - выбрасывает исключение ForbiddenHttpException с сообщением 'Access denied'.
    public function beforeAction($action)
    {
        if (!Yii::$app->user->can('viewAdminPage')) {
            throw new ForbiddenHttpException('Access denied');
        }
        return parent::beforeAction($action);
    }

    // Действие, которое отображает представление index.php и предоставляет список доступных ролей и разрешений
    public function actionIndex()
    {
        $roles = RBACManager::GetRoles();
        $permissions = RBACManager::GetPermissions();

        return $this->render('index', [
            'roles' => $roles,
            'permissions' => $permissions
        ]);
    }

    // Действие, которое отображает определенную роль, имя которой берётся из массива $_GET
    public function actionViewRole()
    {
        $role = Yii::$app->request->get('role');
        $role = RBACManager::GetRole($role);

        return $this->render('role', [
            'role' => $role
        ]);
    }

    // Действие, которое отображает определенное разрешение, имя которого берётся из массива $_GET
    public function actionViewPermission()
    {
        $permission = Yii::$app->request->get('permission');
        $permission = RBACManager::GetPermission($permission);

        return $this->render('permission', [
            'permission' => $permission
        ]);
    }

    // Действие, которое отображает форму CreateRoleForm.php и позволяет создать новую роль
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

    // Действие, отвечающее за удаление роли, имя которой передаётся в качестве аргумента $role
    // @role - имя роли
    public function actionDeleteRole($role)
    {
        $role = Yii::$app->authManager->getRole($role);

        RBACManager::Remove($role);

        Yii::$app->session->setFlash('success', 'The role was succesfully deleted');
        $this->redirect('index');
    }
}