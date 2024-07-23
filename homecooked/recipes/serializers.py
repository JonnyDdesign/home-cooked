from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    ingredients = serializers.JSONField()

    class Meta:
        model = Recipe
        fields = ['id', 'title', 'ingredients', 'instructions', 'image']

    def create(self, validated_data):
        ingredients = validated_data.pop('ingredients')
        recipe = Recipe.objects.create(**validated_data)
        recipe.set_ingredients(ingredients)
        recipe.save()
        return recipe
    
    def update(self, instance, validated_data):
        ingredients = validated_data.pop('ingredients', None)
        instance.title = validated_data.get('title', instance.title)
        instance.instructions = validated_data.get('instructions', instance.instructions)
        instance.image = validated_data.get('image', instance.image)
        if ingredients is not None:
            instance.set_ingredients(ingredients)
        instance.save()
        return instance