from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.products_view),
    path('products/<int:id>/', views.product_view),
    path('products/create/', views.create_product_view),

    path('categories/', views.categories_view),
    path('categories/<int:id>/', views.category_view),
    path('categories/create/', views.create_category_view),

    path('categories/<int:id>/products/', views.products_by_category_view),
]
