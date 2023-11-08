from django.http import JsonResponse
from .models import Drink
from .serializers import DrinkSerializer


def drink_list(request):
  # get all the drinks
  drinks = Drink.objects.all()

  # serialize them
  serializer = DrinkSerializer(drinks, many=True)

  # return JSON response
  return JsonResponse({'drinks': serializer.data})

