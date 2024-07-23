from django.db import models
import json

class Recipe(models.Model):
    title = models.CharField(max_length=100)
    ingredients = models.TextField()
    instructions = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return self.title
    
    def set_ingredients(self, ingredients):
        self.ingredients = json.dumps(ingredients)

    def get_ingredients(self):
        return json.loads(self.ingredients)