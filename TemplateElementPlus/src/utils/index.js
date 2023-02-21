export const phoneRegex = /^09[0-9]{8}$/;

export const varigyMsgRegex = /[0-9]{4}/;

export const varigyGtNumber = /[0-9]{5}/;

export const nameRegex = /^[\u4e00-\u9fa5]{2,4}$/;

export const emailRegex = /^(([.](?=[^.]|^))|[\w_%{|}#$~`+!?-])+@(?:[\w-]+\.)+[a-zA-Z.]{2,63}$/;

export const phoneFormat = (numbers) => {
    // console.log('numbers', numbers);
    if (numbers?.length === 10 && phoneRegex.test(numbers)) {
        let arr = numbers.split('');
        arr.splice(4, 0, '-');
        arr.splice(8, 0, '-');
        let formatStr = arr.join('');
        return formatStr;
    }
    // console.log('手機資料不正確');
    return numbers;
};

export const base64ImgtoFile = (dataurl, fileName = 'file') => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const suffix = mime.split('/')[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    var u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], `${fileName}.${suffix}`, { type: mime });
};

export default {};
