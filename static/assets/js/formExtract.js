var isPost = true
var dataID = undefined
function formExtract() {
    let checkedItem = $('input:checked')
    if (checkedItem.length != 3) {
        alert('資料填寫不完整')
        return undefined
    }
    let chartType = checkedItem[0]
    let colx = checkedItem[1].value
    let coly = checkedItem[2].value
    let result = {
        type: chartType.value,
        columns: [colx, coly]
    }
    return result
}

function getDataID() {
    $.ajax({
        type: "POST",
        url: '/api/dataVisual/nameToID',
        data: {name: $('#dataName').val()},
        dataType: 'json',
        async: false,
        success: (data) => {
            dataID = data.id
        },
        error: (err) => {
            console.log(err)
        }
    })
}

function sendVisualSetting() {
    let formData = formExtract()
    if (formData === undefined) {
        return
    }
    visualConfig.type = formData.type
    visualConfig.columns = formData.columns
    getDataID()
    if (dataID === undefined) {
        alert('cannot get data id')
        return
    }
    visualConfig.dataID = dataID
    let isValid = configValidate()
    if (isValid) {
        if (isPost) {
            addComp()
        }
        else {
            updateComp()
        }
    }
}