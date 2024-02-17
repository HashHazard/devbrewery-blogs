from django.shortcuts import render, HttpResponse
from .models import Article
from .serializers import ArticleSerializer, UserSerializer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import APIView
from rest_framework import generics, mixins, viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth.models import User
from .permissions import IsOwnerOrReadOnly


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsOwnerOrReadOnly]

    # def get_queryset(self):
    #     # return super().get_queryset()
    #     return Article.objects.filter(author=self.request.user)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    # def perform_update(self, serializer):
    #     # return super().perform_update(serializer)
    #     # Allow users to edit only their own posts
    #     if serializer.instance.author == self.request.user:
    #         serializer.save()
    #     else:
    #         # You may raise a PermissionDenied exception or handle it as per your requirements
    #         # raise PermissionDenied("You don't have permission to edit this post.")

    #         return Response(status=status.HTTP_403_FORBIDDEN)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# class ArticleList(generics.GenericAPIView, mixins.ListModelMixin,
#                   mixins.CreateModelMixin):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

#     def get(self, request):
#         return self.list(request)

#     def post(self, request):
#         return self.create(request)


# class ArticleDetails(generics.GenericAPIView, mixins.RetrieveModelMixin,
#                      mixins.UpdateModelMixin, mixins.DestroyModelMixin):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#     lookup_field = 'id'

#     def get(self, request, id):
#         return self.retrieve(request, id=id)

#     def put(self, request, id):
#         return self.update(request, id=id)

#     def delete(self, request, id):
#         return self.destroy(request, id=id)


# # class ArticleList(APIView):
# #     def get(self, request):
# #         articles = Article.objects.all()
# #         serializer = ArticleSerializer(articles, many=True)
# #         return Response(serializer.data)

# #     def post(self, request):
# #         serializer = ArticleSerializer(data=request.data)
# #         if serializer.is_valid():
# #             serializer.save()
# #             return Response(serializer.data, status=status.HTTP_201_CREATED)
# #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# # class ArticleDetails(APIView):
# #     def get_object(self, id):
# #         try:
# #             return Article.objects.get(id=id)
# #         except Article.DoesNotExist:
# #             return Response(status=status.HTTP_404_NOT_FOUND)

# #     def get(self, request, id):
# #         article = self.get_object(id)
# #         serializer = ArticleSerializer(article)
# #         return Response(serializer.data)

# #     def put(self, request, id):
# #         article = self.get_object(id)
# #         serializer = ArticleSerializer(article, data=request.data)
# #         if serializer.is_valid():
# #             serializer.save()
# #             return Response(serializer.data)
# #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# #     def delete(self, request, id):
# #         article = self.get_object(id)
# #         article.delete()
# #         return Response(status=status.HTTP_204_NO_CONTENT)


# # def Index(request):
# #     return HttpResponse("it is working")


# # @api_view(['GET', 'POST'])
# # def article_list(request):

# #     # get all articles
# #     if request.method == 'GET':
# #         articles = Article.objects.all()
# #         serializer = ArticleSerializer(articles, many=True)
# #         return Response(serializer.data)

# #     elif request.method == 'POST':
# #         # data = JSONParser().parse(request)
# #         serializer = ArticleSerializer(data=request.data)
# #         if serializer.is_valid():
# #             serializer.save()
# #             return Response(serializer.data, status=status.HTTP_201_CREATED)
# #         return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# # @api_view(['GET', 'PUT', 'DELTE'])
# # def article_details(request, pk):
# #     try:
# #         article = Article.objects.get(pk=pk)
# #     except Article.DoesNotExist:
# #         return Response(status=status.HTTP_404_NOT_FOUND)

# #     if request.method == 'GET':
# #         serialize = ArticleSerializer(article)
# #         return Response(serialize.data)
# #     elif request.method == 'PUT':
# #         # data = JSONParser().parse(request)
# #         serializer = ArticleSerializer(article, data=request.data)
# #         if serializer.is_valid():
# #             serializer.save()
# #             return Response(serializer.data)
# #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# #     elif request.method == 'DELETE':
# #         article.delete()
# #         return Response(status=status.HTTP_204_NO_CONTENT)
