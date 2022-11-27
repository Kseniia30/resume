import {AddressBox, AddressList, AddressItem, AddressLink}
    from "./Resume.styled"

const ResumeAddress = () => {
    return <AddressBox>
            <AddressList>
                <AddressItem><b>phone:</b><AddressLink href="tel:+380636805185">+380636805185</AddressLink></AddressItem>
                <AddressItem><b>e-mail:</b><AddressLink href="mailto:kellyshikova3004@gmail.com">kellyshikova3004@gmail.com</AddressLink></AddressItem>
                <AddressItem><b>address:</b> Chuguev, Kharkov region, Ukraine</AddressItem>
            </AddressList>
        </AddressBox>
}
export default ResumeAddress