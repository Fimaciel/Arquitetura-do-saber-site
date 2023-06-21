from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login, name="login"),
    path("formacao", views.formacao, name="formacao"),
    path("formacaoUser", views.formacaoUser, name="formacaoUser"),
    path("acessoria", views.acessoria, name="acessoria"),
    path("homeUser", views.homeUser, name="homeUser"),
    path("publicar", views.publicar, name="publicar"),
    path("acessoriaUser", views.acessoriaUser, name="acessoriaUser"),
]
