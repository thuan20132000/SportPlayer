export default class UserModel {
    accessToken: string = ''
    _id: string = ''
    name: string = ''
    phone: string = ''
    verifiedAt: string = ''
    thumbnail: string = ''
    avatar: string = ''
    avatarUrl: string = ''
    points: number = 0
    tag: string = ''
    notification: Boolean = true
    factorAuthentication: Boolean = true
    wallet: string = ''
    myWallet: string = ''
    deviceID: string = ''
    countryCode: string = ''
    countryPhoneCode: string = ''
    role: number = 1

    constructor(dict: any) {
        if (dict === undefined || dict === null) {
            return
        }
        this._id = dict?.id ?? null
        this.name = dict?.name
        this.accessToken = dict?.access_token
        this.phone = dict?.phone ?? ''
        this.avatar = dict?.avatar
        this.points = dict?.points
        this.tag = dict?.tag
        this.notification = dict?.notification === 1
        this.factorAuthentication = dict?.factor_authentication === 1
        this.wallet = dict?.wallet_address ?? ''
        this.myWallet = dict?.iost_network_address ?? ''
        this.deviceID = dict?.device_id ?? ''
        this.countryCode = dict?.countryCode ?? ''
        this.countryPhoneCode = dict?.country_code ?? dict?.countryPhoneCode ?? ''
        this.avatarUrl = dict?.avatar_url
    }



    toDictionary() {
        return {
            access_token: this.accessToken,
            id: this._id,
            name: this.name,
            avatar: this.avatar,
            phone: this.phone,
            points: this.points,
            tag: this.tag,
            notification: this.notification ? 1 : 0,
            factor_authentication: this.factorAuthentication ? 1 : 0,
            wallet_address: this.wallet,
            iost_network_address: this.myWallet,
            device_id: this.deviceID,
            countryCode: this.countryCode,
            countryPhoneCode: this.countryPhoneCode,
            country_code: this.countryPhoneCode
        }
    }

}