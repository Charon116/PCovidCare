export const transValidation = {
    email_incorrect: "Invalid email",
    gender_incorrect: "Invalid gender",
    password_incorrect: "Password must have at least 6 characters",
    password_confirmation_incorrect: "The confirm password is not correct",
};

export const transMailBookingNew = {
    subject: "Thông báo email về tiến trình đặt lịch khám tại P-Covid Care",
    template: (data) => {
        return `<h3>Cảm ơn bạn đã đặt lịch khám tại hệ thống của P-Covid Care </h3>
        <h4>Thông tin cho cuộc hẹn đã đặt:</h4>
        <div>Tên bác sĩ:: ${data.doctor} </div>
        <div>Thời gian: ${data.time}</div>
        <div>Ngày: ${data.date}</div>
        <div>Trạng thái: <b> Đang chờ xử lý - Lịch hẹn mới đang chờ xác nhận</b></div>
        <h4>Hệ thống P-Covid Care sẽ tự động gửi email thông báo khi cuộc hẹn được xác nhận hoàn tất. Cảm ơn bạn !</h4>`;
    },
};

export const transMailBookingFailed = {
    subject: "Thông báo email về tiến trình đặt lịch khám tại P-Covid Care",
    template: (data) => {
        return `<h3>Cảm ơn bạn đã đặt lịch khám tại hệ thống của P-Covid Care  </h3>
        <h4>Thông tin cho cuộc hẹn đã đặt:</h4>
        <div>Tên bác sĩ:: ${data.doctor} </div>
        <div>Thời gian: ${data.time}</div>
        <div>Ngày: ${data.date}</div>
        <div>Trạng thái: <b>Huỷ - ${data.reason}</b></div>
        <h4>Nếu bạn nhận thấy lỗi từ email này, vui lòng liên hệ với nhà điều hành hỗ trợ: <b> 0708118749 </b>. Cảm ơn bạn !</h4>`;
    },
};

export const transMailBookingSuccess = {
    subject: "Thông báo email về tiến trình đặt lịch khám tại P-Covid Care",
    template: (data) => {
        return `<h3>Cảm ơn bạn đã đặt lịch khám tại hệ thống của P-Covid Care </h3>
        <h4>Thông tin cho cuộc hẹn đã đặt:</h4>
        <div>Tên bác sĩ:: ${data.doctor} </div>
        <div>Thời gian: ${data.time}</div>
        <div>Ngày: ${data.date}</div>
        <div>Trạng thái: <b>Thành công</b></div>
        <h4>Cảm ơn rất nhiều !</h4>`;
    },
};

export const transMailRemedy= {
    subject: "Email gửi hóa đơn y tế từ bác sĩ ",
    template: (data) => {
        return `<h3>Cảm ơn bạn đã tin tưởng đặt lịch khám bệnh tại hệ thống của DoctorCare.</h3>
        Sau khi bạn đã đến phòng khám của bác sĩ <b> ${data.doctor} </b>, bạn có thể xem lại chi tiết thanh toán từ tệp đính kèm email này. </h4>
        <div>Trong trường hợp không nhận được tệp đính kèm hoặc không giải nén, vui lòng liên hệ với nhà điều hành hỗ trợ<b>0708118749</b></div>
        <h4>Cảm ơn rất nhiều !</h4>`;
    },
};

export const tranRegisterEmail = {
    subject: "Sign up a new account at P-Covid Care",
    template: (data) => {
        return `<h3>Thank you for register account at P-Covid Care's system </h3>
        <h4>Information for registered account:</h4>
        <div>Email: ${data.email} </div>
        <h4>P-Covid Care system will automatically send email notification when confirmed appointment is complete. Thank you !</h4>`;
    },
};