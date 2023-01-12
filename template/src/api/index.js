import request from '../utils/request';
import { replaceAllDash } from '../utils/index';

export const getCountryCode = async () => {
    let { data } = await request('GET', '/api/basic/city/index');
    let result = data.result.data;

    return result;
};

export const getDistrictsCode = async (params) => {
    let { data } = await request('GET', `/api/basic/city/${params.country_code_id}/index`);
    let result = data.result.data;

    return result;
};

export const getDistrictsCityCode = async (params) => {
    // console.log('params',params)
    let result = await request('GET', `/api/basic/city/${params.country_code_id}/item`);

    return result;
};

export const searchMobile = async (params) => {
    if (!params.mdm_id || !params.mobile) return false;

    let { data } = await request('GET', `/api/mdm/${params.mdm_id}/${replaceAllDash(params.mobile)}/search`);
    let result = data.result.data;

    return result;
};

export const getMdmToken = async (params) => {
    if (!params.mdm_id || !params.mobile) return false;
    let { data } = await request('GET', `/api/mdm/${params.mdm_id}/add/${replaceAllDash(params.mobile)}/send-sms`);
    // console.log('result', data.result);
    return data.result;
};

export const postMdmMember = async (params) => {
    let { data } = await request(
        'POST',
        `/api/mdm/${params.mdm_id}/add/${replaceAllDash(params.mobile)}/${params.token}/create`,
        params
    );

    // console.log('result', data.result);
    return data.result;
};

export const getMdmEditToken = async (params) => {
    if (!params.mdm_id || !params.mobile) return false;

    let { data } = await request(
        'GET',
        `/api/mdm/${params.mdm_id}/edit/${replaceAllDash(params.mobile)}/${params.cus_no}/send-sms`
    );
    // console.log('result', data.result);
    return data.result;
};

export const patchMdmMember = async (params) => {
    let { data } = await request(
        'POST',
        `/api/mdm/${params.mdm_id}/edit/${replaceAllDash(params.mobile)}/${params.cus_no}/${params.token}/save`,
        params
    );

    return data.result;
};

export const posWebMobileSearch = async (params) => {
    console.log('params', params);
    if (!params.xuser_id || !params.mobile) throw Error('posWebMobileSearch params error');

    let { data } = await request('GET', `/api/pos/${params.xuser_id}/${replaceAllDash(params.mobile)}/search`);
    let result = data.result.data;

    return result;
};

export const sendBelongSMS = async (params) => {
    if (!params.xuser_id || !params.mobile || !params.cus_no) throw Error('sendBelongSMS params error');

    let { data } = await request(
        'GET',
        `/api/pos/${params.xuser_id}/belong/${replaceAllDash(params.mobile)}/${params.cus_no}/send-sms`
    );

    return data.result;
};

export const postVerifyBelongedCode = async (params) => {
    if (!params.xuser_id || !params.mobile || !params.cus_no || !params.token || !params.verify_code) {
        throw Error('postVerifyBelongedCode params error');
    }

    let result = await request(
        'POST',
        `/api/pos/${params.xuser_id}/belong/${replaceAllDash(params.mobile)}/${params.cus_no}/${
            params.token
        }/verify-code`,
        params
    );

    return result;
};

export const postMdmEditVerifyCode = async (params) => {
    if (!params.mdm_id || !params.mobile || !params.cus_no || !params.token || !params.verify_code) {
        throw Error('postMdmEditVerifyCode params error');
    }

    let result = await request(
        'POST',
        `/api/mdm/${params.mdm_id}/edit/${replaceAllDash(params.mobile)}/${params.cus_no}/${params.token}/verify-code`,
        params
    );

    return result;
};

export const postMdmAddVerifyCode = async (params) => {
    if (!params.mdm_id || !params.mobile || !params.token || !params.verify_code) {
        throw Error('postMdmAddVerifyCode params error');
    }

    let result = await request(
        'POST',
        `/api/mdm/${params.mdm_id}/add/${replaceAllDash(params.mobile)}/${params.token}/verify-code`,
        params
    );

    return result;
};

export const getMobileChangeSMS = async (params) => {
    if (!params.mdm_id || !params.mobile) throw Error('getMobileChangeSMS params error');

    let { data } = await request('GET', `/api/mdm/${params.mdm_id}/change/${replaceAllDash(params.mobile)}/send-sms`);

    return data.result;
};

export const postMobileChangeVerifyCode = async (params) => {
    if (!params.mdm_id || !params.mobile || !params.token || !params.verify_code) {
        throw Error('postMobileChangeVerifyCode params error');
    }

    let result = await request(
        'POST',
        `/api/mdm/${params.mdm_id}/change/${replaceAllDash(params.mobile)}/${params.token}/verify-code`,
        params
    );

    return result;
};

export const getNewMobileChangeSMS = async (params) => {
    if (!params.mdm_id || !params.old_mobile || !params.change_token || !params.new_mobile)
        throw Error('getNewMobileChangeSMS params error');

    let { data } = await request(
        'GET',
        `/api/mdm/${params.mdm_id}/change/${replaceAllDash(params.old_mobile)}/${
            params.change_token
        }/to/${replaceAllDash(params.new_mobile)}/send-sms`
    );

    return data.result;
};

export const postNewMobileChangeVerifyCode = async (params) => {
    if (!params.mdm_id || !params.change_token || !params.new_mobile || !params.token || !params.verify_code) {
        throw Error('postMobileChangeVerifyCode params error');
    }

    let result = await request(
        'POST',
        `/api/mdm/${params.mdm_id}/change/${params.change_token}/to/${replaceAllDash(params.new_mobile)}/${
            params.token
        }/verify-code`,
        params
    );

    return result;
};

export default {};
