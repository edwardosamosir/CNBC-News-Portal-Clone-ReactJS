export const dateFormatter = (value) => {
    return (new Date(value)).toLocaleString('id-ID',{dateStyle : 'full'})
}
