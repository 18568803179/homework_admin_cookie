<template>
  <div>
    <div class="shop">
      <span>商品管理 — —添加商品</span>
    </div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品名称">
        <el-input v-model="form.name" placeholder="请输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input v-model="form.title" placeholder="请输入商品描述"></el-input>
      </el-form-item>
      <el-form-item label="商品品类" class="type">
        <el-select v-model="form.type" placeholder="请选择商品类别" @change="getType2" class="type1">
          <el-option v-for="item in type" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
        <el-select v-model="form.type2" placeholder="请选择商品类别" v-if="type2.length!=0">
          <el-option v-for="item in type2" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="form.price" type="number" placeholder="请输入商品价格">
          <template slot="append">元</template>
        </el-input>
      </el-form-item>
      <el-form-item label="商品库存">
        <el-input v-model="form.count" type="number" placeholder="请输入商品价格">
          <template slot="append">元</template>
        </el-input>
      </el-form-item>
      <el-form-item label="图片上传">
        <!-- 上传图片 -->
        <el-upload
          action="#"
          list-type="picture-card"
          :http-request="img_upload"
          :before-upload="beforeUpload"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :limit="1"
          class="upload_box"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <!-- 悬浮界面，删除和预览 -->
        <el-dialog :visible.sync="dialogVisible">
          <!-- 预览大图片展示区域 -->
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form-item>
      <el-form-item label="商品详情">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="create">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.shop {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  font-size: 24px;
  height: 46px;
  align-items: baseline;
}
.el-form {
  margin: 20px 100px;
  width: 540px;
  .type .el-form-item__content {
    display: flex;
  }
  .type1{
    margin-right: 17px;
  }

}
</style>

<script>
import { imgUpload, getCateGory, saveShop } from '@/api/methods'
export default {
  data () {
    return {
      form: {
        name: '',
        title:'',
        type: '',
        type2:'',
        desc: '',
        count: ''
      },
      type: [],
      type2: [],
      imageUrl: '',  //图片路径
      dialogImageUrl: '',  //预览大图
      dialogVisible: false,		//图片悬浮遮罩层
    }
  },
  mounted () {
    getCateGory().then(res => {
      this.type = res.data.data
    })
  },
  methods: {
    beforeUpload (file) {
      // console.log(file);
      //拿到文件数据
      let form = new FormData()
      form.append('file', file)
      // imgUpload(form).then(res => {
      //   console.log(res);
      // })
    },
    //图片上传
    img_upload () {
      // this.$axios.post('http://admintest.happymmall.com/manage/product/upload.do').then(res=>{
      //   console.log(res);
      // })
    },
    handleAvatarSuccess (res, file) {
      console.log(res, file);
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    //图片悬浮界面
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //图片删除
    handleRemove (res, file) {
      // console.log(res);
      this.imageUrl = ''
    },
    getType2 (val) {
      getCateGory(val).then(res => {
        this.type2=res.data.data
      })
    },
    //提交数据
    create () {
      let params = {
        name: this.form.name,
        subtitle:this.form.title,
        categoryId:this.form.type2?this.form.type2:this.form.type,
        desc:this.form.desc,
        subImages:this.imageUrl,
        price:this.form.price,
        stock:this.form.count
      }
      saveShop(params).then(res => {
        console.log(res);
        this.$router.push('/goods')
      })
    },
  },
}
</script>