// 翻天印有声书应用支持网站脚本

document.addEventListener('DOMContentLoaded', function() {
    // 添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // FAQ 折叠功能
    const faqItems = document.querySelectorAll('.faq-question');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            item.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                if (answer && answer.classList.contains('faq-answer')) {
                    if (answer.style.display === 'none' || !answer.style.display) {
                        answer.style.display = 'block';
                        this.classList.add('active');
                    } else {
                        answer.style.display = 'none';
                        this.classList.remove('active');
                    }
                }
            });
        });
    }
    
    // 联系表单验证
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 简单验证
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;
            
            if (!email.value || !email.value.includes('@')) {
                alert('请输入有效的电子邮件地址');
                isValid = false;
            }
            
            if (!message.value || message.value.length < 10) {
                alert('请输入至少10个字符的消息内容');
                isValid = false;
            }
            
            if (isValid) {
                // 在实际应用中，这里会发送表单数据到服务器
                alert('感谢您的反馈！我们会尽快回复您。');
                contactForm.reset();
            }
        });
    }
    
    // 添加当前年份到页脚版权信息
    const copyrightYear = document.querySelector('.copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }
});