from django.urls import path
from api.views import *

urlpatterns = [
    # fbv
    # path('products/', products_list),
    # path('products/<int:product_id>/', product_detail),

    # cbv, mixins, generics
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
    
    # genres/categories
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:id>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:id>/products/', CategoryProductsAPIView.as_view()),
]
