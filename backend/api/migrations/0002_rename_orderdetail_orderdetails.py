# Generated by Django 5.0.6 on 2024-06-18 14:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='OrderDetail',
            new_name='OrderDetails',
        ),
    ]
