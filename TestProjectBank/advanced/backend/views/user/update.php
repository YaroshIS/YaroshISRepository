<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model common\models\User */

$this->title = 'Update User: ' . $model->username;
$this->params['breadcrumbs'][] = ['label' => 'Users', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="user-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <form action="" method="post">
        <label class="control-label" for="select-role">Role</label>
        <select id="select-role" name="role" class="form-control">
            <? foreach ($roles as $role) : ?>
                <option value="<?= $role->name ?>"> <?= $role->name ?></option>
            <? endforeach ?>
        </select>
        <button type="submit">Update</button>
    </form>

</div>
