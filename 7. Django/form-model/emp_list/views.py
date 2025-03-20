from django.shortcuts import render, redirect
from . import models, forms

# Create your views here.
def home(request):
    emp = models.Employee.objects.all()
    return render(request, 'emp_home.html', {'data': emp})

def remove_emp(request, id):
    models.Employee.objects.get(pk = id).delete()
    return redirect('emp')

def add_emp(request):
    if request.method == 'POST':
        form = forms.EmpForm(request.POST)
        if form.is_valid:
            form.save()
    else:
        form = forms.EmpForm()
    return render(request, 'add_emp.html', {'data': form})