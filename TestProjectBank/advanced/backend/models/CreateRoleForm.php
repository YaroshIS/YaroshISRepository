<?php
/**
 * Created by PhpStorm.
 * User: YaroshIS
 * Date: 18.11.2017
 * Time: 13:13
 */

namespace backend\models;


use yii\base\Model;

class CreateRoleForm extends Model
{
    public $name;
    public $permissions;
    public $description;

    public function rules()
    {
        return [
            ['name', 'trim'],
            ['name', 'required'],
            ['name', 'string', 'min' => 2, 'max' => 64],
            ['name', 'match', 'pattern' => '/^\w{2,}$/'],

            ['permissions', 'required'],

            ['description', 'trim'],
            [['description'], 'string']
        ];
    }

    // Проверяет переданные даннные и с помощью RBACManager создаёт роль
    public function Create()
    {
        if (!$this->validate()) {
            return null;
        }

        if (RBACManager::CreateRole($this->name, $this->permissions, $this->description)) {
            return true;
        };

        return null;
    }
}