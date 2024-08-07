"""
URL configuration for digweb project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
##
from django.conf.urls import handler404
handler404 = 'digweb.views.error_404_handler'
##
from . import views
##import views
app_name = "digital"
urlpatterns = [
    path('dataadminpage/', admin.site.urls),
    path('zakaria/', views.zakaria, name="zakaria"),
    path('', views.mainpage, name="main"),
    path('pr/', views.mainpr_page, name="mainpr"),
    path('about/', views.about_page, name="about_page"),
    path('about/pr/', views.aboutpr_page, name="aboutpr_page"),
    path('appointment/', views.appointment_page, name="appointment_page"),
    path('service/', views.service_page, name="service_page"),
    path('service/pr/', views.servicepr_page, name="servicepr_page"),
    path('diabetes/', views.diabetes_page, name="diabetes_page"),
    path('diabetes/pr/', views.diabetespr_page, name="diabetespr_page"),
    path('stroke/', views.stroke_page, name="stroke_page"),
    path('stroke/pr/', views.strokepr_page, name="strokepr_page"),
    path('ckd/', views.ckd_page, name="ckd_page"),
    path('ckd/pr/', views.ckdpr_page, name="ckdpr_page"),
    path('cvd/', views.cvd_page, name="cvd_page"),
    path('cvd/pr/', views.cvdpr_page, name="cvdpr_page"),
    path('underconstruction/', views.under_page, name="under_page"),
    path('dissai/',views.dissai_page, name = "dissai_page"),
    path ('dissaipr/', views.dissaipr_page , name = "dissaipr_page"),
    path('digitalhealth/',views.digitalhealth_page, name = 'digitalhealth_page'),
    path('digitalhealthpr/',views.digitalhealthpr_page, name = 'digitalhealthpr_page'),
    path('disscuseffect/', views.disscuseffect_page, name = 'disscuseffect_page'),
    path('disscuseffectpr/', views.disscuseffectpr_page, name= 'disscuseffectpr_page'),
    path('diabetes/create/', views.create_diabetes,name="create_diabetes"),
    path('cvd/create/', views.create_cvd,name="create_cvd"),
    path('stroke/create/', views.create_stroke,name="create_stroke"),
    path('ckd/create/', views.create_ckd,name="create_ckd"),

    path('diabetes/pr/create/', views.create_diabetes,name="createpr_diabetes"),
    path('cvd/pr/create/', views.create_cvd,name="createpr_cvd"),
    path('stroke/pr/create/', views.create_stroke,name="createpr_stroke"),
    path('ckd/pr/create/', views.create_ckd,name="createpr_ckd"),

    path('alzheimer/', views.alzheimer_page,name="alzheimer_page"),
    path('alzheimer/create/', views.create_alzheimer,name="create_alzheimer"), 

    path('alzheimer/pr/', views.alzheimerpr_page,name="alzheimerpr_page"),
    path('alzheimer/pr/create/', views.create_alzheimer,name="create_alzheimer"),
    
    path('hiv/', views.hiv_page,name="hiv_page"),

    path('underconstruction/', views.under_page, name="under_page")
    ##path('404/', views.page404_page, name="page404_page")
    
    ##
    ##
]
