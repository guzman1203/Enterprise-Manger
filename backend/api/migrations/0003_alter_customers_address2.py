# Generated by Django 5.0.6 on 2024-06-18 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_orderdetail_orderdetails'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customers',
            name='address2',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
