from rest_framework import permissions
from rest_framework.views import APIView
from .models import Contact
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
import requests
activecampaign_url = settings.ACTIVE_CAMPAIGN_URL
activecampaign_key = settings.ACTIVE_CAMPAIGN_KEY


class ContactCreateView(APIView):
    def post(self, request, format=None):
        data = self.request.data

        name = data['name']
        email = data['email']
        subject = data['subject']
        message = data['message']
        phone = data['phone']

        try:

            send_mail(
                subject,
                'Name '
                + name
                + '\nEmail: '
                + email
                + '\n\nMessage:\n'
                + message
                + '\nPhone: '
                + phone,
                'rutafpv@gmail.com',
                ['rutafpv@gmail.com'],
                fail_silently=False
            )

            Contact.objects.create(
                name=name,
                email=email,
                subject=subject,
                phone=phone,
                message=message,
            )

            url = 'https://api.brevo.com/v3/contacts'
            data = {
                "attributes": {
                    "NOMBRE":name,
                    "TAG":"CONTACTO"
                },
             
                "email": email,  
            }

            headers = {
                'accept': 'application/json',
                'content-type': 'application/json',
                'api-key': activecampaign_key
            }

            response = requests.post(url, json=data, headers=headers)
            print(response)
            if response.status_code != 201 and response.status_code != 200:
                return Response(
                    {'error': 'Something went wrong when creating contact'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )

            contact = response.json()

            return Response({'success': 'Message sent successfully'})
        except:
            return Response({'error': 'Message failed to be sent'})


class DemoAddListView(APIView):
    def post(self, request, format=None):
        data = self.request.data
        email=data['email']
        
        try:
            # CREATE/UPDATING CONTACT
            url = 'https://api.brevo.com/v3/contacts'
            data = {
                "attributes": {
                    "TAG":"CLASS"
                },
             
                "email": email, 
            }
            headers = {
                'accept': 'application/json',
                'content-type': 'application/json',
                'api-key': activecampaign_key
            }
            response = requests.post(url, json=data, headers=headers)

            if response.status_code != 201 and response.status_code != 200:
                return Response(
                    print('OLA'),
                    {'error': 'Something went wrong when creating contact'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )

            contact = response.json()
            
            return Response({'success': 'Message sent successfully'})
        except:
            return Response({'error': 'Message failed to be sent'})

class NewsletterAddListView(APIView):
    def post(self, request, format=None):
        data = self.request.data
        email=data['email']
        
        try:
            # CREATE/UPDATING CONTACT
            url = 'https://api.brevo.com/v3/contacts'
            data = {
                "attributes": {
                    "TAG":"NEWSLETTER"
                },
             
                "email": email,
            }
            headers = {
                'accept': 'application/json',
                'content-type': 'application/json',
                'api-key': activecampaign_key
            }
            response = requests.post(url, json=data, headers=headers)

            if response.status_code != 201 and response.status_code != 200:
                return Response(
                    {'error': 'Something went wrong when creating contact'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )

            contact = response.json()

            return Response({'success': 'Message sent successfully'})
        except:
            return Response({'error': 'Message failed to be sent'})