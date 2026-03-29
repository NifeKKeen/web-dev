import json

import django.views.defaults
from rest_framework import status
from rest_framework.decorators import api_view
from django.http import HttpResponse, JsonResponse, HttpResponseNotAllowed
from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response

from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


@api_view(['GET'])
def products_view(req):
    return Response(ProductSerializer(Product.objects.all(), many=True).data)


@api_view(['GET'])
def product_view(req, id):
    product = get_object_or_404(Product, id=id)

    return Response(ProductSerializer(product).data)


@csrf_exempt
@api_view(['POST'])
def create_product_view(req):
    serializer = ProductSerializer(data=req.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def categories_view(req):
    return Response(CategorySerializer(Category.objects.all(), many=True).data)


@api_view(['GET'])
def category_view(req, id):
    category = get_object_or_404(Category, id=id)
    return Response(CategorySerializer(category).data)


@csrf_exempt
@api_view(['POST'])
def create_category_view(req):
    serializer = CategorySerializer(data=req.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def products_by_category_view(req, id):
    products = Product.objects.filter(category=id)
    print(products)

    return Response(ProductSerializer(products, many=True).data)
