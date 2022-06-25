from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser       #Custom User Model

# Create your models here.

# Custom User manager
class UserManager(BaseUserManager):
    def create_user(self, email, name, manager, password=None, password2=None):
        """
        Creates and saves a User with the given email, name, manager and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
            manager=manager,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, manager, password=None):
        """
        Creates and saves a superuser with the given email, name, manager and password.
        """
        user = self.create_user(
            email,
            password=password,
            name=name,
            manager=manager,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


# Custom User Model (https://docs.djangoproject.com/en/4.0/topics/auth/customizing/#a-full-example)
class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='Email ID ',
        max_length=255,
        unique=True,
    )
    name = models.CharField(max_length=255)
    manager = models.BooleanField()
    teacher = models.BooleanField(default=False)
    student = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'manager']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return self.is_admin  

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin