angular.module("appF7")
    .controller("AlunoController",
        function ($scope, $http) {
            $http.get("http://localhost:49621/api/aluno")
            .success(function (dados) {
                $scope.retornoApi = dados;
            });
        });
