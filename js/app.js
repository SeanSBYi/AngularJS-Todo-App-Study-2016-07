var app = angular.module('myTodo', []);
app.controller('myTodoCtr', function($scope) {
    $scope.message = "Hello, World!";

    $scope.todos = [{
        id: 1,
        title: 'List 1',
        completed: false
    }, {
        id: 2,
        title: 'List 2',
        completed: true
    }, {
        id: 3,
        title: 'List 3',
        completed: true
    }];

    $scope.addTodo = function () {
        var newTodoID = 0;
        for(var i = 1; i < ($scope.todos.length+1); i++) {
            if( $scope.todos.id == i ) {
                continue;
            }
            newTodoID = i;
        }
        if( newTodoID == 0 ) {
            newTodoID = $scope.todos.length+1;
        }

        var newTodo = {
            id: newTodoID,
            title: $scope.newTodo.trim(),
            completed: false
        };
        $scope.todos.unshift(newTodo);
    };


    $scope.removeTodo = function (id) {
        if( !id ) {
            return;
        }
        var deleltedTodoIdx = $scope.todos.findIndex(function (todo) {
            return todo.id === id;
        });

        if (deleltedTodoIdx === -1) {
            return ;
        }

        // JavaScript Array splice() Method
        $scope.todos.splice(deleltedTodoIdx, 1);
    }
});