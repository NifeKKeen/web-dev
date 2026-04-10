from django.db import models


class Category(models.Model):
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    name = models.CharField(null=False, max_length=50)


class Product(models.Model):
    name = models.CharField(null=False, max_length=200)
    price = models.FloatField(null=False)
    description = models.TextField(null=False, default='', max_length=1000)
    count = models.IntegerField(null=False, default=1)
    is_active = models.BooleanField(null=False, default=False)
    category = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return f"{self.id} - {self.name}"

