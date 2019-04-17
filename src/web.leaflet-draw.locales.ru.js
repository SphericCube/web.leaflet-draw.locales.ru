(function (window, document, undefined) {
    L._locals || (L._locals = {});

    L._locals['ru'] = {
        draw: {
            handlers: {
                circle: {
                    radius: "Радиус",
                    tooltip: {
                        start: "Зажмите ПКМ и потяните чтобы нарисовать круг."
                    }
                },
                circlemarker: {
                    tooltip: {
                        start: "Нажмите на карту чтобы установить маркер."
                    }
                },
                marker: {
                    tooltip: {
                        start: "Нажмите на карту чтобы установить маркер."
                    }
                },
                polygon: {
                    tooltip: {
                        cont: "Нажмите на карту чтобы продожить рисовать полигон.",
                        end: "Нажмите на начальную точку чтобы завершить полигон.",
                        start: "Нажмите на карту чтобы начать рисовать полигон."
                    }
                },
                polyline: {
                    error: "<strong>Error:</strong> shape edges cannot cross!",
                    tooltip: {
                        cont: "Нажмите на карту чтобы продожить рисовать линию.",
                        end: "Нажмите на последнюю точку чтобы завершить линию.",
                        start: "Нажмите на карту чтобы начать рисовать линию."
                    }
                },
                rectangle: {
                    tooltip: {
                        start: "Зажмите ПКМ и потяните чтобы начать рисовать."
                    }
                },
                simpleshape: {
                    tooltip: {
                        end: "Отпустите ПКМ чтобы завершить."
                    }
                }
            },
            toolbar: {
                actions: {
                    text: "Отмена",
                    title: "Отменить фигуру"
                },
                buttons: {
                    circle: "Нарисовать круг",
                    circlemarker: "Установить круг-маркер",
                    marker: "Установить маркер",
                    polygon: "Нарисовать полигон",
                    polyline: "Нарисовать линию",
                    rectangle: "Нарисовать прямоугольник"
                },
                finish: {
                    text: "Завершить",
                    title: "Завершить фигуру"
                },
                undo: {
                    text: "Удалить последнюю точку",
                    title: "Удалить последнюю нарисованую точку"
                }
            }
        },
        edit: {
            handlers: {
                edit: {
                    tooltip: {
                        subtext: "Нажмите 'Отменить' чтобы отменить изменения.",
                        text: "Перетаскивайте точки и маркера чтобы изменить фигуру."
                    },
                    remove: {
                        tooltip: {
                            text: "Нажмите на точку чтобы удалить."
                        }
                    }
                }
            },
            toolbar: {
                actions: {
                    cancel: {
                        text: "Отменить",
                        title: "Отменить редактирование, сбросить все изменения"
                    },
                    clearAll: {
                        text: "Очистить всё",
                        title: "Очистить все слои"
                    },
                    save: {
                        text: "Сохранить",
                        title: "Сохранить изменения"
                    }
                },
                buttons: {
                    edit: "Редактировать слои",
                    editDisabled: "Нет слоев для редактирования",
                    remove: "Удалить слои",
                    removeDisabled: "Нет слоев для удаления"
                }
            }
        }
    };
}(window, document));
