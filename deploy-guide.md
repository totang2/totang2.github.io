# GitHub Pages 部署指南

本文档提供了如何将翻天印有声书应用支持网站部署到 GitHub Pages 的详细步骤。

## 准备工作

1. 确保您有一个 GitHub 账号
2. 安装 Git（如果尚未安装）

## 部署步骤

### 1. 创建 GitHub 仓库

1. 登录 GitHub 账号
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称建议使用：`fty-audio-book-support` 或类似名称
4. 选择公开（Public）仓库
5. 点击 "Create repository"

### 2. 克隆仓库到本地

```bash
git clone https://github.com/你的用户名/fty-audio-book-support.git
cd fty-audio-book-support
```

### 3. 复制支持网站文件

将 `docs` 目录中的所有文件复制到仓库根目录：

```bash
cp -r /Users/always_day_1/work/fantianyin/fty-audio-book/docs/* .
```

### 4. 提交并推送文件

```bash
git add .
git commit -m "初始化支持网站"
git push origin main
```

### 5. 配置 GitHub Pages

1. 在 GitHub 仓库页面，点击 "Settings"
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分，选择 "Deploy from a branch"
4. 在 "Branch" 下拉菜单中选择 "main"，文件夹选择 "/ (root)"
5. 点击 "Save"

### 6. 等待部署完成

部署通常需要几分钟时间。完成后，您将在页面顶部看到一个绿色的成功消息，其中包含您的网站 URL，通常是：

```
https://你的用户名.github.io/fty-audio-book-support/
```

## 配置自定义域名（可选）

如果您想使用自定义域名，请按照以下步骤操作：

1. 在您的域名注册商处添加 DNS 记录：
   - 如果使用子域名（如 support.yourdomain.com），添加 CNAME 记录指向 `你的用户名.github.io`
   - 如果使用顶级域名，添加 A 记录指向 GitHub Pages 的 IP 地址

2. 编辑仓库中的 CNAME 文件，将其内容设置为您的域名：
   ```
   support.yourdomain.com
   ```

3. 提交并推送更改：
   ```bash
   git add CNAME
   git commit -m "添加自定义域名"
   git push origin main
   ```

4. 在 GitHub 仓库的 Settings > Pages 页面，在 "Custom domain" 部分输入您的域名并保存

## 更新网站内容

当您需要更新网站内容时，只需修改相应的 HTML 或其他文件，然后提交并推送更改：

```bash
git add .
git commit -m "更新网站内容"
git push origin main
```

GitHub Actions 将自动部署更新后的内容。

## 故障排除

- **部署失败**：检查 GitHub 仓库的 Actions 选项卡，查看失败原因
- **样式丢失**：确保所有 CSS 文件路径正确
- **自定义域名不工作**：确认 DNS 记录已正确设置，并且已经等待足够的时间（最多 48 小时）让 DNS 更改生效

## 其他资源

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [自定义域名配置指南](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)