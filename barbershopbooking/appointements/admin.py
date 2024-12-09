from django.contrib import admin

# Register your models here.
from .models import Appointement

@admin.register(Appointement)
class AppointementAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'phone', 'date', 'time', 'service']
    search_fields = ['name', 'email', 'phone', 'date', 'time', 'service']
    list_filter = ['date', 'time']
    date_hierarchy = 'date'
    ordering = ['date', 'time']
    fields = ['name', 'email', 'phone', 'date', 'time', 'service']
    readonly_fields = ['name', 'email', 'phone', 'date', 'time', 'service']
