from django.db import models




class Appointement(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    date = models.DateField()
    time = models.TimeField()
    service = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.name} - {self.date} {self.time}"
