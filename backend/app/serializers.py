from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password', 'manager', 'teacher', 'student']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class StudentSerializer(serializers.ModelSerializer):
    courses = serializers.StringRelatedField(many=True)
    class Meta:
        model = StudentModel
        fields = '__all__' #['id', 'user', 'name', 'grade', 'courses']

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance


class TeacherSerializer(serializers.ModelSerializer):
    # students = serializers.SerializerMethodField(read_only=True)
    # students_na = serializers.CharField(source='students.name')
    students = serializers.StringRelatedField(many=True)
    class Meta:

        model = TeacherModel
        fields = '__all__'#['id', 'user', 'Name', 'subject', 'students']

    def get_students_na(self, obj):
        print(obj)
        return obj.students.name

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseModel
        fields = '__all__'#['id', 'grade', 'subject']

class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModuleModel
        fields = '__all__'#['course', 'module', 'completed']