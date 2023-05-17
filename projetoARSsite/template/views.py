from django.shortcuts import render

def templates(request):
      return render(request, 'template/index.html','')

# Create your views here.
