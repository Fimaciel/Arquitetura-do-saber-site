from django.shortcuts import render


def index(request):
    return render(request, "index.html")


def login(request):
    return render(request, "login.html")


def formacao(request):
    return render(request, "formacaoCliente.html")


def formacaoUser(request):
    return render(request, "acessoriaUsuario.html")


def acessoria(request):
    return render(request, "acessoriaCliente.html")


def acessoriaUser(request):
    return render(request, "acessoriaUsuario.html")


def homeUser(request):
    return render(request, "homeUsuario.html")


def publicar(request):
    return render(request, "publicar.html")
