from django.urls import path

from .views import AppointementView

urlpatterns = [
    path('book/', AppointementView.as_view()),
]

