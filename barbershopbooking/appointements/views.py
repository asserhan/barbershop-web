from django.shortcuts import get_object_or_404
from .models import Appointement
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class AppointementView(APIView):
    def get(self, request):
        appointements = Appointement.objects.all().values()
        return Response({'appointements': list(appointements)}, status=status.HTTP_200_OK)
    
    def post(self, request):
        name = request.data.get('name')
        email = request.data.get('email')
        phone = request.data.get('phone')
        date = request.data.get('date')
        time = request.data.get('time')
        service = request.data.get('service')
        appointement = Appointement(name=name, email=email, phone=phone, date=date, time=time, service=service)
        appointement.save()

        return Response({'message': 'Appointement created successfully!', 'appointement': {
            'id': appointement.id,
            'name': appointement.name,
            'email': appointement.email,
            'phone': appointement.phone,
            'date': appointement.date,
            'time': appointement.time,
            'service': appointement.service,
        }}, status=status.HTTP_201_CREATED)
    
    def delete(self, request):
        id = request.data.get('id')
        if not id:
            return Response({'message': 'Please provide an id'}, status=status.HTTP_400_BAD_REQUEST)
        appointement = get_object_or_404(Appointement, id=id)
        appointement.delete()
        return Response({'message': 'Appointement deleted successfully!'}, status=status.HTTP_200_OK)

