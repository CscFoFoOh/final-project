'use strict';

angular
.module('projectDesperado')
.config(function($locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
      })
      .state('password-request', {
        url: '/password/reset',
        templateUrl: 'views/password_reset.html',
        controller: 'ResetPasswordController'
      })
      .state('password-confirm', {
        url: '/password/confirm',
        templateUrl: 'views/password_confirm.html',
        controller: 'ConfirmPasswordController'
      })
      .state('dashboard', {
        abstract: true,
        url: '/dashboard',
        templateUrl: 'views/dashboard/dashboard.html',
        resolve: {
          authUser: function($auth) {
            return $auth.validateUser();
          }
        }
      })
      .state('dashboard.main', {
        url: '/',
        templateUrl: 'views/dashboard/main.html',
        controller: 'DashboardController'
      })
      .state('dashboard.edit-account', {
        url: '/edit-account',
        templateUrl: 'views/dashboard/edit_account.html',
        controller: 'EditAccountController'
      })
      .state('dashboard.add-project', {
        url: '/projects/new',
        templateUrl: 'views/dashboard/projects/new.html',
        controller: 'AddProjectController'
      })
      .state('dashboard.single-project', {
        url: '/projects/{id}',
        templateUrl: 'views/dashboard/projects/show.html',
        controller: 'DashboardProjectController'
      })
      .state('dashboard.edit-project', {
        url: '/projects/{id}/edit',
        templateUrl: 'views/dashboard/projects/edit.html',
        controller: 'EditProjectController'
      })

      .state('projects', {
        url: '/projects',
        templateUrl: 'views/projects/index.html',
        controller: 'ProjectsController'
      })
      .state('single-project', {
        url: '/projects/{id}',
        templateUrl: 'views/projects/show.html',
        controller: 'ProjectController'
      })

      .state('users', {
        url: '/users',
        templateUrl: 'views/users/index.html',
        controller: 'UsersController'
      })
      .state('single-user', {
        url: '/users/{slug}',
        templateUrl: 'views/users/show.html',
        controller: 'UserController'
      })

      .state('admin', {
        abstract: true,
        url: '/admin',
        templateUrl: 'views/admin/admin.html',
        resolve: {
          authUser: function($auth) {
            return $auth.validateUser();
          }
        }
      })
      .state('admin.admin-users', {
        url: '/users',
        templateUrl: 'views/admin/users/index.html',
        controller: 'AdminUsersController'
      })
      .state('admin.add-user', {
        url: '/users/new',
        templateUrl: 'views/admin/users/new.html',
        controller: 'AdminAddUserController'
      })
      .state('admin.edit-user', {
        url: '/users/{slug}/edit',
        templateUrl: 'views/admin/users/edit.html',
        controller: 'AdminEditUserController'
      })
      .state('admin.single-user', {
        url: '/users/{slug}',
        templateUrl: 'views/admin/users/show.html',
        controller: 'AdminUserController'
      });
  });
