<?php
/**
 * Created by PhpStorm.
 * User: YaroshIS
 * Date: 13.11.2017
 * Time: 21:29
 */

namespace backend\models;

use Yii;
use yii\base\Model;
use common\models\User;

class CreateUserForm extends Model
{
    public $username;
    public $email;
    public $password;
    public $role;


    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['username', 'trim'],
            ['username', 'required'],
            ['username', 'unique', 'targetClass' => '\common\models\User', 'message' => 'This username has already been taken.'],
            ['username', 'string', 'min' => 2, 'max' => 255],

            ['email', 'trim'],
            ['email', 'required'],
            ['email', 'email'],
            ['email', 'string', 'max' => 255],
            ['email', 'unique', 'targetClass' => '\common\models\User', 'message' => 'This email address has already been taken.'],

            ['password', 'required'],
            ['password', 'string', 'min' => 6],

            ['role', 'trim'],
            ['role', 'required'],
        ];
    }

    /**
     * Signs user up.
     *
     * @return User|null the saved model or null if saving fails
     */
    public function Create()
    {
        if (!$this->validate()) {
            return null;
        }

        $user = new User();
        $user->username = $this->username;
        $user->email = $this->email;
        $user->setPassword($this->password);
        $user->generateAuthKey();

        if ($user->save()) {
            $auth = Yii::$app->authManager;
            $authRole = $auth->getRole($this->role);
            $auth->assign($authRole, $user->getId());

            if(!$authRole){
                return null;
            }

            return $user;
        }

        return null;
    }
}