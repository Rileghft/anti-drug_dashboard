var visualConfig = {
    userName: "user",
    dataID: undefined,
    columns: undefined,
    type: undefined,
    top: undefined,
    left: undefined,
    width: undefined,
    height: undefined
}

var compID = undefined

function configValidate() {
    let conf = visualConfig
    conf.userName = conf.userName || "user"
    conf.top = conf.top || 0
    conf.left = conf.left || 0
    conf.width = conf.width || 480
    conf.height = conf.height || 400
    visualConfig = conf
    return !Object.values(visualConfig).includes(undefined)
}

function addComp() {
    let isValid = configValidate()
    if (!isValid) {
        return
    }
    $.ajax({
        type: "POST",
        url: '/api/dataVisual/',
        data: visualConfig,
        dataType: 'json',
        success: () => {
            location.replace('/dashboard')
        },
        error: (err) => {
            alert("failed " + err)
        }
    })
}

function updateComp() {
    let isValid = configValidate()
    if (!isValid) {
        return
    }
    let config = {
        id: compID,
        config: visualConfig
    }
    $.ajax({
        type: "PUT",
        url: '/api/dataVisual/',
        data: config,
        dataType: 'json',
        success: () => {
            location.replace('/dashboard')
        },
        error: (err) => {
            alert("failed " + err)
        }
    })
}

function deleteComp() {
    $.ajax({
        type: "DELETE",
        url: '/api/dataVisual/',
        data: {id: compID},
        dataType: 'json',
        success: () => {
        },
        error: (err) => {
            console.log(err)
            alert("failed " + err)
        }
    })
}