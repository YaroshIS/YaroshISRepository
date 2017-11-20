<?php
/**
 * Created by PhpStorm.
 * User: YaroshIS
 * Date: 16.11.2017
 * Time: 14:03
 */

namespace backend\models;


use Yii;
use yii\base\Model;

class RBACManager extends Model
{
    public static function CreateRole($roleName, $permissions, $description = null)
    {
        $roles = self::GetRoles();
        $role = self::GetRole($roleName);

        if (in_array($role, $roles)) {
            Yii::$app->session->setFlash('error', 'Error. The role with same name is already exists');
            return false;
        }

        $role = Yii::$app->authManager->createRole($roleName);
        $role->description = $description;

        Yii::$app->authManager->add($role);

        foreach ($permissions as $permissionName) {
            $permission = Yii::$app->authManager->getPermission($permissionName);
            Yii::$app->authManager->addChild($role, $permission);
        }

        return true;
    }

    public static function GetRoleByID($id)
    {
        $response = Yii::$app->authManager->getRolesByUser($id);
        $response['permissions'] = Yii::$app->authManager->getPermissionsByUser($id);

        return $response;
    }

    public static function GetRoles()
    {
        return Yii::$app->authManager->getRoles();
    }

    public static function UpdateUserRole($id, $roleName)
    {
        $role = Yii::$app->authManager->getRole($roleName);
        Yii::$app->authManager->revokeAll($id);
        Yii::$app->authManager->assign($role, $id);
    }

    public static function RevokeUserRole($id)
    {
        Yii::$app->authManager->revokeAll($id);
    }

    public static function GetRole($roleName)
    {
        return Yii::$app->authManager->getRole($roleName);
    }

    public static function GetPermission($permissionName)
    {
        return Yii::$app->authManager->getPermission($permissionName);
    }

    public static function GetPermissions()
    {
        return Yii::$app->authManager->getPermissions();
    }

    public static function Remove($item)
    {
        Yii::$app->authManager->remove($item);
    }
}