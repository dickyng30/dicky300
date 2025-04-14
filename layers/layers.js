var wms_layers = [];


        var lyr_gmaps_0 = new ol.layer.Tile({
            'title': 'gmaps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Padangadm_1 = new ol.format.GeoJSON();
var features_Padangadm_1 = format_Padangadm_1.readFeatures(json_Padangadm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Padangadm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Padangadm_1.addFeatures(features_Padangadm_1);
var lyr_Padangadm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Padangadm_1, 
                style: style_Padangadm_1,
                popuplayertitle: 'Padang adm',
                interactive: true,
                title: '<img src="styles/legend/Padangadm_1.png" /> Padang adm'
            });
var format_Pemukiman_Padang_2 = new ol.format.GeoJSON();
var features_Pemukiman_Padang_2 = format_Pemukiman_Padang_2.readFeatures(json_Pemukiman_Padang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_Padang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_Padang_2.addFeatures(features_Pemukiman_Padang_2);
var lyr_Pemukiman_Padang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_Padang_2, 
                style: style_Pemukiman_Padang_2,
                popuplayertitle: 'Pemukiman_Padang',
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_Padang_2.png" /> Pemukiman_Padang'
            });
var format_Administrasi_Kecamatan_Padang_3 = new ol.format.GeoJSON();
var features_Administrasi_Kecamatan_Padang_3 = format_Administrasi_Kecamatan_Padang_3.readFeatures(json_Administrasi_Kecamatan_Padang_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrasi_Kecamatan_Padang_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrasi_Kecamatan_Padang_3.addFeatures(features_Administrasi_Kecamatan_Padang_3);
var lyr_Administrasi_Kecamatan_Padang_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administrasi_Kecamatan_Padang_3, 
                style: style_Administrasi_Kecamatan_Padang_3,
                popuplayertitle: 'Administrasi_Kecamatan_Padang',
                interactive: true,
                title: '<img src="styles/legend/Administrasi_Kecamatan_Padang_3.png" /> Administrasi_Kecamatan_Padang'
            });
var format_Sungai_Padang_4 = new ol.format.GeoJSON();
var features_Sungai_Padang_4 = format_Sungai_Padang_4.readFeatures(json_Sungai_Padang_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_Padang_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_Padang_4.addFeatures(features_Sungai_Padang_4);
var lyr_Sungai_Padang_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_Padang_4, 
                style: style_Sungai_Padang_4,
                popuplayertitle: 'Sungai_Padang',
                interactive: true,
                title: '<img src="styles/legend/Sungai_Padang_4.png" /> Sungai_Padang'
            });
var format_Rumah_Sakit_Padang_5 = new ol.format.GeoJSON();
var features_Rumah_Sakit_Padang_5 = format_Rumah_Sakit_Padang_5.readFeatures(json_Rumah_Sakit_Padang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Sakit_Padang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Sakit_Padang_5.addFeatures(features_Rumah_Sakit_Padang_5);
var lyr_Rumah_Sakit_Padang_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Sakit_Padang_5, 
                style: style_Rumah_Sakit_Padang_5,
                popuplayertitle: 'Rumah_Sakit_Padang',
                interactive: true,
                title: '<img src="styles/legend/Rumah_Sakit_Padang_5.png" /> Rumah_Sakit_Padang'
            });

lyr_gmaps_0.setVisible(true);lyr_Padangadm_1.setVisible(true);lyr_Pemukiman_Padang_2.setVisible(true);lyr_Administrasi_Kecamatan_Padang_3.setVisible(true);lyr_Sungai_Padang_4.setVisible(true);lyr_Rumah_Sakit_Padang_5.setVisible(true);
var layersList = [lyr_gmaps_0,lyr_Padangadm_1,lyr_Pemukiman_Padang_2,lyr_Administrasi_Kecamatan_Padang_3,lyr_Sungai_Padang_4,lyr_Rumah_Sakit_Padang_5];
lyr_Padangadm_1.set('fieldAliases', {'Id': 'Id', 'kecamatan': 'kecamatan', });
lyr_Pemukiman_Padang_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Administrasi_Kecamatan_Padang_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Sungai_Padang_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Rumah_Sakit_Padang_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_Padangadm_1.set('fieldImages', {'Id': '', 'kecamatan': '', });
lyr_Pemukiman_Padang_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Administrasi_Kecamatan_Padang_3.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Sungai_Padang_4.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_Rumah_Sakit_Padang_5.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'TIPRST': '', 'JPLYRS': '', 'ALAMAT': '', });
lyr_Padangadm_1.set('fieldLabels', {'Id': 'no label', 'kecamatan': 'no label', });
lyr_Pemukiman_Padang_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Administrasi_Kecamatan_Padang_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Sungai_Padang_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Rumah_Sakit_Padang_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_Rumah_Sakit_Padang_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});