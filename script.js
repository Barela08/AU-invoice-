document.getElementById('invoiceForm').addEventListener('submit', function(e) {
    e.preventDefault();

    document.getElementById('invStudentName').textContent = document.getElementById('studentName').value;
    document.getElementById('invFatherName').textContent = document.getElementById('fatherName').value;
    document.getElementById('invRegistrationNumber').textContent = document.getElementById('registrationNumber').value;
    document.getElementById('invAdmissionNumber').textContent = document.getElementById('admissionNumber').value;
    document.getElementById('invCourseName').textContent = document.getElementById('courseName').value;
    document.getElementById('invCourseDetails').textContent = document.getElementById('courseDetails').value;
    document.getElementById('invAddress').textContent = document.getElementById('address').value;
    document.getElementById('invSemester').textContent = document.getElementById('semester').value;
    document.getElementById('invFeesAmount').textContent = document.getElementById('feesAmount').value;
    document.getElementById('invPaymentDate').textContent = document.getElementById('paymentDate').value;
    document.getElementById('invPaymentMode').textContent = document.getElementById('paymentMode').value;
    document.getElementById('invPurpose').textContent = document.getElementById('purpose').value;

    // Generate random Invoice number
    document.getElementById('invNumber').textContent = 'INV' + Math.floor(Math.random() * 1000000);

    document.getElementById('invoice').style.display = 'block';
    document.getElementById('invoiceForm').style.display = 'none';
});

document.getElementById('download').addEventListener('click', function() {
    const element = document.getElementById('invoice');
    var opt = {
        margin:       0.5,
        filename:     'Invoice.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'landscape' }
    };
    html2pdf().from(element).set(opt).save();
});
