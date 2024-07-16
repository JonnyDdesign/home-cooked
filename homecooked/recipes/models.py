from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=100)
    ingredients = models.JSONField()
    instructions = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return self.title