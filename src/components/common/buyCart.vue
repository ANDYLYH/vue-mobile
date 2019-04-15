 <template>
   <div class="item-btn-box">
		<transition name="showReduce">
			<img class="btn-box-img" v-if="foodNum > 0"  src="../../static/img/home/down@2x.png" @click.stop="subtractCart" />
		</transition>
		<transition name="showReduce">
			<span v-if="foodNum > 0" class="goodsNumCount">{{foodNum}}</span>
		</transition>
		<img class="btn-box-img" src="../../static/img/home/add@2x.png" @click.stop="addCart" />
	</div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
    	data(){
            return{
              
            }
        },
        mounted(){

        },
        computed: {
            ...mapState([
                'cartList'
            ]),
            /**
             * 监听cartList变化，更新当前商铺的购物车信息shopCart，同时返回一个新的对象
             */
            shopCart: function (){
                return Object.assign({},this.cartList[this.productNo]);
            },
            //shopCart变化的时候重新计算当前商品的数量
			foodNum: function (){
                let productNo = this.product.productNo;
                if (this.shopCart) {
                    return this.shopCart.addShopCartNum;
                }else {
                    return 0;
                }
            },
        },
        props:['productNo','product'],
        methods: {
            ...mapMutations([
                'ADD_CART','REDUCE_CART',
            ]),
			//移出购物车
			subtractCart(){
				this.REDUCE_CART(this.product);
			},
			//加入购物车
			addCart(){
				this.ADD_CART(this.product);
			}
        },
    }
</script>

<style lang="scss" scoped>
	.item-btn-box {
		height: 100%;
		width: 100%;
		line-height: 46px;
		text-align: right;
		.goodsNumCount {
			/*float: left;*/
			display: inline-block;
			min-width: 24px;
			height: 24px;
			line-height: 24px;
			font-size: 14px;
			text-align: center;
			color: #333333;
			position: relative;
			top: -7px;
		}
		.btn-box-img {
			/*float: left;*/
			height: 24px;
			width: 24px;
		}
		.showReduce-enter-active,
		.showReduce-leave-active {
			transition: all .3s ease-out;
		}
		.showReduce-enter,
		.showReduce-leave-active {
			opacity: 0;
			transform: translateX(1rem);
		}
	}
    .showReduce-enter-active, .showReduce-leave-active {
        transition: all .3s ease-out;
    }
    .showReduce-enter, .showReduce-leave-active {
        opacity: 0;
        transform: translateX(10px);
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .3s;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
    .fadeBounce-enter-active, .fadeBounce-leave-active {
        transition: all .3s;
    }
    .fadeBounce-enter, .fadeBounce-leave-active {
        opacity: 0;
        transform: scale(.7);
    }

</style>

