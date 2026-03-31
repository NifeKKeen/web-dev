import json

import django.views.defaults
from rest_framework import status, viewsets
from rest_framework.decorators import api_view, action
from django.http import HttpResponse, JsonResponse, HttpResponseNotAllowed
from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response

from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['GET'], url_path='products')
    def products(self, req, pk=None):
        products = Product.objects.filter(category=pk)

        return Response(ProductSerializer(products, many=True).data)
