
from rest_framework import serializers
from .models import CustomUser, Task, Section, Skill, PasswordSendReset, TestJSON, Answers, Image, ImageDB
from .models import Sectionv2, SecAndSkillhelp


class CustomUserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(
        required=True
    )
    username = serializers.CharField()
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = CustomUser
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)  # as long as the fields are the same, we can just use this
        if password is not None:
            instance.set_password(password)
        instance.is_active = False
        instance.save()
        return instance

class PasswordSendResetSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True
    )
    class Meta:
        model = PasswordSendReset
        fields = ('email',)

class CustomUserSerializerReadOnly(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(
        required=True
    )
    username = serializers.CharField()
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = CustomUser
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)  # as long as the fields are the same, we can just use this
        if CustomUser.objects.filter(email=validated_data.pop('email', None)).exists():
             raise (serializers.ValidationError('This email already exists'))
        if password is not None:
            instance.set_password(password)
        instance.is_active = False
        instance.save()
        return instance

class SectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Section
        fields = ('id','Section')

class SkillSerializer(serializers.ModelSerializer):
    section = SectionSerializer(many=False)
    class Meta:
        model = Skill
        fields = ('id', 'Skill', 'section')

class SkillSerializerv2(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('id', 'Skill')

class SectionSerializerv2(serializers.ModelSerializer):
    skilll = SkillSerializerv2(many=True)
    class Meta:
        model = Sectionv2
        fields = ('id','Section','skilll')

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('id','name','image')
class ImageDBSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageDB
        fields = ('id','image')
class AnswersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answers
        fields = ('id','wronganswers','correctans')

class TaskSerializer(serializers.ModelSerializer):
    skill = SkillSerializer(many=True)
    image = ImageSerializer(many=True,required=False)


    # class Meta:
    #     model = Task
    #     fields = ('id','type','level','skill','text',
    #               'wronganswers','correctans','author','points','image','private')
    class Meta:
        model = Task
        fields = ('id','type','level','skill','text',
                  'wronganswers','correctans','author','points','image','private','timetosolve','spacetosolve')


class TestJSONSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestJSON
        fields = ('id','name','tasks','created','user_id')

class SasSerializer(serializers.ModelSerializer):
    class Meta:
        model = SecAndSkillhelp
        fields = ('id','text')
