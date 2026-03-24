import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ConsultingFrom = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (

        <form method="post" className="contact-validation-active mx-[-15px] md:mx-[-12px] sm:mx-[-8px] col:mx-0 overflow-hidden contact-form" id="contact-form-main" onSubmit={(e) => submitHandler(e)}>
            <div className="w-[calc(50%-30px)] md:w-[calc(50%-24px)] sm:w-[calc(50%-16px)] col:w-full float-left mx-[15px] md:mx-[12px] sm:mx-[8px] col:mx-0 mb-[25px] md:mb-[20px] sm:mb-[15px] col:mb-[12px]">
                <input
                    className='form-control w-full font-normal bg-[rgba(255,255,255,0.1)] h-[50px] md:h-[44px] sm:h-[40px] col:h-[36px] border border-[rgba(255,255,255,0.2)] text-[#e5e7eb] text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] transition-all pl-[15px] md:pl-[12px] sm:pl-[10px] col:pl-[8px] focus:outline-0 focus:shadow-none focus:border-transparent focus:bg-white'
                    value={forms.name}
                    type="text"
                    name="name"
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    placeholder="Adınız Soyadınız" />
                {validator.message('name', forms.name, 'required|alpha_space')}
            </div>
            <div className="w-[calc(50%-30px)] md:w-[calc(50%-24px)] sm:w-[calc(50%-16px)] col:w-full float-left mx-[15px] md:mx-[12px] sm:mx-[8px] col:mx-0 mb-[25px] md:mb-[20px] sm:mb-[15px] col:mb-[12px]">
                <input
                    className='form-control w-full font-normal bg-[rgba(255,255,255,0.1)] h-[50px] md:h-[44px] sm:h-[40px] col:h-[36px] border border-[rgba(255,255,255,0.2)] text-[#e5e7eb] text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] transition-all pl-[15px] md:pl-[12px] sm:pl-[10px] col:pl-[8px] focus:outline-0 focus:shadow-none focus:border-transparent focus:bg-white'
                    value={forms.email}
                    type="email"
                    name="email"
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    placeholder="E-Posta Adresiniz" />
                {validator.message('email', forms.email, 'required|email')}
            </div>
            <div className="w-[calc(50%-30px)] md:w-[calc(50%-24px)] sm:w-full col:w-full float-left mx-[15px] md:mx-[12px] sm:mx-0 col:mx-0 mb-[25px] md:mb-[20px] sm:mb-[15px] col:mb-[12px]">
                <input
                    className='form-control w-full font-normal bg-[rgba(255,255,255,0.1)] h-[50px] md:h-[44px] sm:h-[40px] col:h-[36px] border border-[rgba(255,255,255,0.2)] text-[#e5e7eb] text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] transition-all pl-[15px] md:pl-[12px] sm:pl-[10px] col:pl-[8px] focus:outline-0 focus:shadow-none focus:border-transparent focus:bg-white'
                    value={forms.phone}
                    type="phone"
                    name="phone"
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    placeholder="Telefon Numaranız" />
                {validator.message('phone', forms.phone, 'required|phone')}
            </div>
            <div className="w-[calc(50%-30px)] md:w-[calc(50%-24px)] sm:w-full col:w-full float-left mx-[15px] md:mx-[12px] sm:mx-0 col:mx-0 mb-[25px] md:mb-[20px] sm:mb-[15px] col:mb-[12px]">
                <select
                    className='form-control w-full font-normal bg-[rgba(255,255,255,0.1)] h-[50px] md:h-[44px] sm:h-[40px] col:h-[36px] border border-[rgba(255,255,255,0.2)] text-[#e5e7eb] text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] transition-all pl-[15px] md:pl-[12px] sm:pl-[10px] col:pl-[8px] focus:outline-0 focus:shadow-none focus:border-transparent focus:bg-white'
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    value={forms.subject}
                    type="text"
                    name="subject">
                    <option>Öncelikli Konunuz</option>
                    <option>Aile Hukuku</option>
                    <option>Ceza Hukuku</option>
                    <option>Şirketler Hukuku</option>
                    <option>Tazminat Hukuku</option>
                    <option>Eğitim Hukuku</option>
                    <option>Gayrimenkul Hukuku</option>
                </select>
                {validator.message('subject', forms.subject, 'required')}
            </div>
            <div className="w-[calc(100%-30px)] md:w-[calc(100%-24px)] sm:w-[calc(100%-16px)] col:w-full mb-[25px] md:mb-[20px] sm:mb-[15px] col:mb-[12px] mx-[15px] md:mx-[12px] sm:mx-[8px] col:mx-0">
                <textarea
                    className='form-control w-full bg-[rgba(255,255,255,0.1)] h-[150px] md:h-[120px] sm:h-[100px] col:h-[80px] border border-[rgba(255,255,255,0.2)] text-[#e5e7eb] text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] transition-all pt-[15px] md:pt-[12px] sm:pt-[10px] col:pt-[8px] pl-[15px] md:pl-[12px] sm:pl-[10px] col:pl-[8px] focus:outline-0 focus:shadow-none focus:border-transparent focus:bg-white'
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    value={forms.message}
                    type="text"
                    name="message"
                    placeholder="Mesajınız">
                </textarea>
                {validator.message('message', forms.message, 'required')}
            </div>
            <div className="text-left w-full mb-[10px] md:mb-[8px] sm:mb-[6px] col:mb-[5px] ml-[16px] md:ml-[12px] sm:ml-[8px] col:ml-0">
                <button type="submit" className="bg-[#333333] border border-[rgba(255,255,255,0.2)] text-[16px] md:text-[15px] sm:text-[14px] col:text-[13px] font-semibold text-white px-[38px] md:px-[28px] sm:px-[20px] col:px-[16px] py-[10px] md:py-[8px] sm:py-[6px] col:py-[5px] capitalize inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-[#111111] cursor-pointer">Gönder</button>
                <div id="loader">
                    <i className="ti-reload"></i>
                </div>
            </div>
        </form>
    )
}

export default ConsultingFrom;